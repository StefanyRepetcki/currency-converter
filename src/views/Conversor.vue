<template>
    <div class="conversor">
        <h2>{{ convert }} para {{ convertTo }}</h2>
        <div class="input">
            <input type="number" v-model="valor" pattern="[0-9]+" placeholder="Valor" required>
            <select v-model="convert">
                <option v-for="(moeda, index) in moedas" :value="moeda.sigla" :key="index">{{ moeda.nome }}</option>
            </select>
            <select v-model="convertTo">
                <option v-for="(moeda, index) in moedas" :value="moeda.sigla" :key="index">{{ moeda.nome }}</option>
            </select>
        </div>
        <div class="result" v-if="result">
            <p>{{ convertTo | filterSigla }} {{ result }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ConversorElement',
    data() {
        return {
            valor: '',
            result: '',
            convert: 'BRL',
            convertTo: 'BRL',
            moedas: [
                { sigla: 'USD', nome: 'Dólar Americano' },
                { sigla: 'BRL', nome: 'Real Brasileiro' },
                { sigla: 'EUR', nome: 'Euro' },
                { sigla: 'JPY', nome: 'Iene' },
                { sigla: 'CNY', nome: 'Yuan' },
                { sigla: 'GBP', nome: 'Libra Esterlina' },
                { sigla: 'CAD', nome: 'Dólar Canadense' },
                { sigla: 'AUD', nome: 'Dólar Australiano' },
                { sigla: 'CHF', nome: 'Franco Suíço' },
                { sigla: 'SEK', nome: 'Coroa Sueca' },
                { sigla: 'NZD', nome: 'Dólar Neozelandês' },
                { sigla: 'THB', nome: 'Bath' },
                { sigla: 'PHP', nome: 'Peso Filipino' },
                { sigla: 'MYR', nome: 'Malásia Ringgit' },
                { sigla: 'HUF', nome: 'Forint' },
                { sigla: 'PLN', nome: 'Zloty' },
                { sigla: 'RUB', nome: 'Rublo' },
                { sigla: 'INR', nome: 'Rupia' },
                { sigla: 'IDR', nome: 'Rupia' },
                { sigla: 'KRW', nome: 'Won' },
                { sigla: 'MXN', nome: 'Peso Mexicano' },
                { sigla: 'CZK', nome: 'Coroa Checa' },
                { sigla: 'ILS', nome: 'Shekel' },
            ],
        };
    },
    filters: {
        filterSigla(value) {
            switch (value) {
                case 'USD':
                    return '$';
                case 'BRL':
                    return 'R$';
                case 'EUR':
                    return '€';
                case 'JPY':
                    return 'Iene';
                case 'CNY':
                    return 'Yuan';
                case 'GBP':
                    return 'Libra Esterlina';
                case 'CAD':
                    return 'Dólar Canadense';
                case 'AUD':
                    return 'Dólar Australiano';
                case 'CHF':
                    return 'Franco Suíço';
                case 'SEK':
                    return 'Coroa Sueca';
                case 'NZD':
                    return 'Dólar Neozelandês';
                case 'THB':
                    return 'Bath';
                case 'PHP':
                    return 'Peso Filipino';
                case 'MYR':
                    return 'Malásia Ringgit';
                case 'HUF':
                    return 'Forint';
                case 'PLN':
                    return 'Zloty';
                case 'RUB':
                    return 'Rublo';
                case 'INR':
                    return 'Rupia';
                case 'IDR':
                    return 'Rupia';
                case 'KRW':
                    return 'Won';
                case 'MXN':
                    return 'Peso Mexicano';
                case 'CZK':
                    return 'Coroa Checa';
                case 'ILS':
                    return 'Shekel';
                default:
                    return 'Não identificado';
            }
        }
    },
    watch: {
        valor() {
            this.converter();
        },
        convert() {
            this.converter();
        },
        convertTo() {
            this.converter();
        },
    },
    methods: {
        converter() {
            if (this.valor && this.convert && this.convertTo) {
                let valor = this.valor;
                let convert = this.convert;
                let convertTo = this.convertTo;
                let url = `https://api.exchangerate-api.com/v4/latest/${convert}`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        let valorConvertido = valor * data.rates[convertTo];
                        this.result = valorConvertido.toFixed(2);
                    });
            }
        },
    },
}
</script>
<style scoped>
h2,
p {
    color: white;
    text-shadow: 0px 2px #3b759d;
}

p {
    font-size: 3rem;
}

.conversor {
    width: 100%;
    height: 500px;
    background: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin: 0 auto;
    max-width: 600px;
}

input {
    width: 85%;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    padding: 0 10px;
    font-size: 20px;
    color: #2c3e50;
    margin-bottom: 20px;
}

select {
    width: 89%;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    padding: 0 10px;
    font-size: 20px;
    margin-bottom: 20px;
    color: #2c3e50;
}

.input {
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: center;
}

.result {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
</style>