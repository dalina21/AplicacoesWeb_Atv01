export const Header = () => {

    const headerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'blue',
        border: 'none',
        padding: '15px 32px',
        fontSize: '16px',
        cursor: 'pointer',
    };

    return <div style={headerStyle}><header>Header</header></div>;
};