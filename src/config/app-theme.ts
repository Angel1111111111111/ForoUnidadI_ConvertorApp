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
    //color: '#000000',
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
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131413',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
