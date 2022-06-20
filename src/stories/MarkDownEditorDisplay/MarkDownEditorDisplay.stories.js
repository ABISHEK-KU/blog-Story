import React from "react";
import MarkDownEditor from './MarkDownEditorDisplay';

export default {
    title:'MarkDownEditor',
    component:MarkDownEditor
}

export const Small = () => <MarkDownEditor size='small'/>
export const Medium = () => <MarkDownEditor size='medium'/>
export const Large = () => <MarkDownEditor size='large'/>
