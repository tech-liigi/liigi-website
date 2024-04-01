import {createClient} from '@sanity/client'

function debounce(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return (...args: any) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2024-03-23', // use current date (YYYY-MM-DD) to target the latest API version
})
// Define a function to fetch latest references of news and video documents
const fetchLatestReferences = async () => {
    try {
        const references = await client.fetch('*[_type in ["news", "video"] && !(_id in path("drafts.**"))] | order(_updatedAt desc) [0..4]');
        return references.map((ref:any) => ({ _ref: ref._id, _key: ref._id }));
    } catch (error) {
        console.error('Error fetching latest references:', error);
        return [];
    }
};
// Define a function to update the banner document
const updateBannerItems = async () => {
    try {
        const latestContent = await fetchLatestReferences();

        // Update banner document with latest references
        await client
            .patch('8b7f0efe-d1e7-4f20-9520-38e38de135b1')
            .set({ items: latestContent })
            .commit();
        console.log('Banner items updated successfully.');
    } catch (error) {
        console.error('Error updating banner items:', error);
    }
};

// Set up listeners for news and video documents
const newsListener = client.listen('*[_type == "news"]');
const videoListener = client.listen('*[_type == "video"]');

const debouncedUpdateBannerItems = debounce(updateBannerItems, 1000);
// Listen for changes and update banner items accordingly
newsListener.subscribe(debouncedUpdateBannerItems);
videoListener.subscribe(debouncedUpdateBannerItems);
