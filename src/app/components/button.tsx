'use client';

function alerta() {
    alert("Você clicou no botão!");
}

export const Button = () => {

    const buttonStyle = {
        backgroundColor: 'blue',
        border: 'none',
        padding: '15px 32px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '60px',
        color: 'white'
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <button style={buttonStyle} onClick={alerta}>Botão</button>
        </div>
    );
};

