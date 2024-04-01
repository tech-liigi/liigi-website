import { PortableText } from '@portabletext/react';
import React from 'react';
import options from "@/utils/blockComponents";

const RichText = ({ content }: { content: any }) => {
    return (
        <PortableText
            value={content}
            components={options}
        />
    );
};

export default RichText;
