import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Investimento() {
  const [mensal, setMensal] = useState('');
  const [meses, setMeses] = useState('');
  const [taxa, setTaxa] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const c = parseFloat(mensal);
    const t = parseInt(meses);
    const i = parseFloat(taxa) / 100;

    if (!c || !t || isNaN(i)) {
      setResultado('Preencha tudo corretamente.');
      return;
    }

    const semJuros = c * t;
    let comJuros = 0;
    for (let j = 1; j <= t; j++) {
      comJuros = comJuros + comJuros * i + c;
    }

    setResultado(`Sem juros: R$ ${semJuros.toFixed(2)}\nCom juros: R$ ${comJuros.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Investimento</Text>
      <TextInput placeholder="Valor mensal" keyboardType="numeric" value={mensal} onChangeText={setMensal} style={styles.input} />
      <TextInput placeholder="Meses" keyboardType="numeric" value={meses} onChangeText={setMeses} style={styles.input} />
      <TextInput placeholder="Juros (%)" keyboardType="numeric" value={taxa} onChangeText={setTaxa} style={styles.input} />
      <Button title="Calcular" onPress={calcular} />
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#1b0955ff' },
  titulo: { fontSize: 24, color: '#fff', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#061629ff', color: '#fff', padding: 10, marginBottom: 10, borderRadius: 6 },
  resultado: { marginTop: 20, color: '#fff', fontSize: 16, textAlign: 'center' },
});