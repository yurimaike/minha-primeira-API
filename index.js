const express = require('express');
const app = express();

// Permite que a API receba dados em formato JSON
app.use(express.json());

// Rota principal para processar e analisar texto
app.post('/api/analisar-texto', (req, res) => {
    const { texto } = req.body;

    if (!texto) {
        return res.status(400).json({
            erro: "Por favor, envie um texto no campo 'texto'."
        });
    }

    // Processamento automático do texto
    const totalCaracteres = texto.length;
    const totalPalavras = texto.trim().split(/\s+/).filter(Boolean).length;
    const textoMaiusculo = texto.toUpperCase();

    res.json({
        status: "sucesso",
        estatisticas: {
            totalCaracteres,
            totalPalavras
        },
        resultado: textoMaiusculo
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API ativa em http://localhost:${PORT}`);
});