import React from 'react';
import Body from '../../components/Typography/Body';
import Caption from '../../components/Typography/Caption';

const wrapper = {
    display: 'flex',
};

const headings = {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 30%',
    wordBreak: 'break-word',
};

const colorsWrapper = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    marginBottom: '32px',
};

const colorItem = {
    flex: '1 1 auto',
    backgroundColor: '#FF0000',
    padding: '8px',
    justifyContent: 'space-between',
    display: 'flex',
}

const colorItemWrapper = {
    display: 'flex',
    flex: '1 1 auto',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
}

const HaloColorItem = ({ title, subtitle, colors }) => {
    const contrastText = colors.find(color => color.key === 'contrastText');
    const newColors = colors.filter(color => color.key !== 'contrastText');
    const contrastTextColor = contrastText
        ? contrastText.value
        : 'inherit';

    return (
        <div style={wrapper}>
            <div style={headings}>
                {title && <Body variant='body2'>{title}</Body>}
                {subtitle && <Caption>{subtitle}</Caption>}
            </div>
            <div style={colorsWrapper}>
                <div style={colorItemWrapper}>
                    {newColors.map(({key, value}) => (
                        <div key={`${key}-panel`} style={{
                            ...colorItem,
                            backgroundColor: value,
                            color: contrastTextColor,
                        }}>
                            <Caption>{key}</Caption>
                            <Caption>{value}</Caption>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default HaloColorItem;
