import React, { 
  useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const resultDisplay = eval(input);
      setResult(resultDisplay.toString());
    } catch (error) {
      setResult('Enter values');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || '0'}</Text>
      </View>
      <View style={styles.output}>
        <Text style={styles.outputText}>{result}</Text>
      </View>
      <View style={styles.rowsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('1')}>
            <Text style={styles.numberText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('2')}>
            <Text style={styles.numberText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('3')}>
            <Text style={styles.numberText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('+')}>
            <Text style={styles.numberText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('4')}>
            <Text style={styles.numberText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('5')}>
            <Text style={styles.numberText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('6')}>
            <Text style={styles.numberText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('-')}>
            <Text style={styles.numberText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('7')}>
            <Text style={styles.numberText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('8')}>
            <Text style={styles.numberText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('9')}>
            <Text style={styles.numberText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('*')}>
            <Text style={styles.numberText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('0')}>
            <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('.')}>
            <Text style={styles.numberText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={handleCalculate}>
            <Text style={styles.numberText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} onPress={() => handlePress('/')}>
            <Text style={styles.numberText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.clear} onPress={handleClear}>
            <Text style={styles.clearText}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e002c3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    width: '100%',
    backgroundColor: '#e002c3',
    padding: 20,
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 36,
    color: '#03e3fc',
  },
  output: {
    width: '100%',
    backgroundColor: '#e002c3',
    padding: 10,
    alignItems: 'flex-end',
  },
  outputText: {
    fontSize: 24,
    color: '#03e3fc',
  },
  rowsContainer: {
    width: '100%',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  number: {
    backgroundColor: '#03e3fc',
    width: '23%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  numberText: {
    fontSize: 24,
    color: '#e002c3',
  },
  clear: {
    backgroundColor: '#5f0991',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  clearText: {
    fontSize: 24,
    color: '#f0fc03',
  },
});
