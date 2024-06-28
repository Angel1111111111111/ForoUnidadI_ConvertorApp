import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#535452',
    fontWeight: 'bold',
    padding: 20,
  },
  text: {
    color: '#111327',
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    textAlign: 'center',
    //fontStyle: 'italic',
    position: 'absolute',
    padding: 0,
    top: 50,
  },
  input: {
    height: 40,
    borderColor: '#232526',
    borderBottomColor: '#232526',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '100%',
    backgroundColor: '#323030',
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    marginTop: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 150,
  },
  resultText: {
    fontSize: 24,
    marginTop: 20,
    color: '#4caf50',
    fontWeight: 'bold',
    backgroundColor: '#e8f5e9',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 300,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131413',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    position: 'absolute',
    top: 230,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
