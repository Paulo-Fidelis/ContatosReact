import { StyleSheet } from 'react-native';

// Cores
const Cores = {
  Primaria: '#2C3E50',     // Azul Escuro (Para Backgrounds, Títulos, Botões Principais)
  Secundaria: '#3498DB',  // Azul Médio (Para Acentos, Ícones, Links)
  Contraste: '#FFFFFF',    // Branco (Para Textos e Ícones em fundos escuros)
  FundoClaro: '#F4F7F9',  // Cinza Claro (Para o fundo da tela)
  Borda: '#BDC3C7',        // Cinza Suave (Para bordas de Input/Separadores)
  Sucesso: '#2ECC71',      // Verde (Para feedback de sucesso)
  Perigo: '#E74C3C',       // Vermelho (Para ações de exclusão)
};

const styles = StyleSheet.create({
  // --- Estilos de Layout Gerais ---
  container: {
    flex: 1,
    backgroundColor: Cores.FundoClaro,
    paddingTop: 40, // Espaçamento superior para SafeAreaView
    paddingHorizontal: 20,
  },
  containerList: {
    flex: 1,
    paddingHorizontal: 0,
  },
  
  // --- Estilos de Texto e Títulos ---
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Cores.Primaria,
    marginBottom: 20,
    marginTop: 10,
  },
  Label: {
    fontSize: 16,
    color: Cores.Primaria,
    fontWeight: '600',
    marginBottom: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Cores.Contraste,
  },
  
  // --- Estilos de Entrada (Input) ---
  InputContainer: {
    marginBottom: 15,
    paddingVertical: 10,
  },
  Input: {
    fontSize: 16,
    padding: 10,
    backgroundColor: Cores.Contraste,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Cores.Borda,
  },

  // --- Estilos de Botão (Button e TouchableOpacity) ---
  Button: {
    marginTop: 20,
    marginBottom: 10,
    padding: 15,
    backgroundColor: Cores.Secundaria,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Estilo específico para botão de exclusão
  btnDanger: {
    backgroundColor: Cores.Perigo,
    marginTop: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  // --- Estilos de Cabeçalho (HomeScreen) ---
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Cores.Borda,
  },
  headerIcon: {
    padding: 5,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  
  // --- Estilos da Lista de Contatos (HomeScreen) ---
  Icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Cores.Secundaria,
  },
  
  // Estilo para o item da lista
  listItem: {
    backgroundColor: Cores.Contraste,
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  listItemContent: {
    flex: 1,
    marginLeft: 15,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Cores.Primaria,
  },
  listItemSubtitle: {
    fontSize: 14,
    color: Cores.Primaria,
    opacity: 0.7,
  }
});

export default styles;