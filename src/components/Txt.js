import React from 'react';
import Text from "@react-native-material/core/src/Text";

const Txt = ({text, size}) => {
    return (
        <Text style={{fontWeight: 'bold', color: '#123b5e'}} variant={`h${size}`}>{text}</Text>
    );
};

export default Txt;
