import { useEffect, useState } from 'react';

function App() {
    const [backendMessage, setBackendMessage] = useState('Učitavanje...');

    useEffect(() => {
        fetch('http://localhost:8080/api/hello')
            .then(res => res.text())
            .then(data => setBackendMessage(data))
            .catch(err => setBackendMessage('Greška pri spajanju na backend.'));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
            <h1>Moj Web Projekt (React + Spring Boot)</h1>
            <p style={{ fontSize: '18px', color: '#0066cc' }}>
                Poruka s backenda: <strong>{backendMessage}</strong>
            </p>
        </div>
    );
}

export default App;