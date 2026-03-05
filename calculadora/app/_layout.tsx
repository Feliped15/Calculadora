import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Calculadora() {
  const [display, setDisplay] = useState("0");
  const [displaytext, setDisplayText] = useState("0");
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operador, setOperador] = useState(null);

  function adicionarValor(valor) {
    if (display === "0") {
      setDisplay(valor);
    } else {
      setDisplay(display + valor);
    }
	
	if (displaytext === "0") {
      setDisplayText(valor);
    } else {
	  setDisplayText(displaytext + valor);
    }
  }

  function escolherOperador(op) {
	if (operador === null) {
		setValorAnterior(parseFloat(display));
		setOperador(op);
		setDisplay("0");
		setDisplayText(displaytext + op);
	  }
  }

  function calcular() {
    const numeroAtual = parseFloat(display);
    let resultado = 0;

    if (operador === "+") {
      resultado = valorAnterior + numeroAtual;
    } else if (operador === "-") {
      resultado = valorAnterior - numeroAtual;
    } else if (operador === "*") {
      resultado = valorAnterior * numeroAtual;
    } else if (operador === "/") {
      resultado = valorAnterior / numeroAtual;
    }

    setDisplayText(String(resultado));
    setValorAnterior(null);
    setOperador(null);
	setDisplay(String(resultado));
  }

  function limpar() {
    setDisplay("0");
    setValorAnterior(null);
    setOperador(null);
	setDisplayText("0");
  }


  function apagarUltimo() {
	if (operador === null){
		if (display.length > 1) {
			setDisplay(display.slice(0, -1));
		} else {
			setDisplay("0");
		}
	} else {
		setDisplay (valorAnterior.toString());
		setValorAnterior(null);
    	setOperador(null);
	}

	if (displaytext.length > 1) {
		setDisplayText(displaytext.slice(0, -1));
	} else {
		setDisplayText("0");
	  }
  }


  return ( 
    <View style={styles.container}>

      <View style={styles.display}>
        <Text style={styles.textoDisplay}>{displaytext}</Text>
      </View>

      <View style={styles.teclado}>
		
        <View style={styles.linha}>

          <TouchableOpacity style={[styles.botao, styles.operador]} onPress={limpar} >
            <Text style={styles.textoBotao}>{"C"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.operador]} onPress={() => escolherOperador("/")} >
            <Text style={styles.textoBotao}>{"/"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.operador]} onPress={apagarUltimo} >
            <Text style={styles.textoBotao}>{"⌫"}</Text>
          </TouchableOpacity>

        </View>

          <View style={styles.linha}>

            <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("7")} >
              <Text style={styles.textoBotao}>{"7"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("8")} >
              <Text style={styles.textoBotao}>{"8"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("9")} >
              <Text style={styles.textoBotao}>{"9"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.operador]} onPress={() => escolherOperador("*")} >
              <Text style={styles.textoBotao}>{"*"}</Text>
            </TouchableOpacity>
         </View>

        <View style={styles.linha}>

          <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("4")} >
            <Text style={styles.textoBotao}>{"4"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("5")} >
            <Text style={styles.textoBotao}>{"5"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("6")} >
            <Text style={styles.textoBotao}>{"6"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.operador]} onPress={() => escolherOperador("-")} >
            <Text style={styles.textoBotao}>{"-"}</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.linha}>

          <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("1")} >
            <Text style={styles.textoBotao}>{"1"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("2")} >
            <Text style={styles.textoBotao}>{"2"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor("3")} >
            <Text style={styles.textoBotao}>{"3"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.operador]} onPress={() => escolherOperador("+")} >
            <Text style={styles.textoBotao}>{"+"}</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.linha}>

          <TouchableOpacity style={[styles.botao, styles.zero]} onPress={() => adicionarValor("0")} >
              <Text style={styles.textoBotao}>{"0"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao]} onPress={() => adicionarValor(".")} >
              <Text style={styles.textoBotao}>{"."}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.igual]} onPress={calcular} >
            <Text style={styles.textoBotao}>{"="}</Text>
          </TouchableOpacity>
  
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-end",
    padding: 20,
  },
  display: {
    marginBottom: 20,
    alignItems: "flex-end",
  },
  textoDisplay: {
    fontSize: 48,
    color: "#fff",
  },
  teclado: {},
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    height: 70,
    backgroundColor: "#333",
    margin: 5,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotao: {
    fontSize: 24,
    color: "#fff",
  },
  operador: {
    backgroundColor: "#1C1C1E",
  },
  igual: {
    backgroundColor: "#34c759",
  },
  zero: {
    flex: 2,
  },
});