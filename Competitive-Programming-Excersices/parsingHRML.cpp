#include <vector>
#include <iostream>
#include <string>
#include <map>
using namespace std;

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int n = 0;
    int q = 0;
    string s;
    cin >> n;
    cin >> q;
    getline(cin, s);
    vector<string> lines;
    vector<string> queries;
    // tomar los datos, las lineas de codigo y las lineas de las queries
    for (int i = 0; i < n; i++){
        getline(cin, s);
        lines.push_back(s);
    }
    for (int i = 0; i < q; i++){
        getline(cin, s);
        queries.push_back(s);
    }
    //declaracion de un hash map para guardar cada una de las etiquetas
    map<string, map<string, string>> structure;
    //leer el documento y reconocer las etiquetas de apertura y cerrado
    //guardar las llaves de cada una de las etiquetas
    string line;
    string tag = "";
    bool isValue = false;
    string key = "";
    string value = "";
    int spcpos = 0;
    map<string,string> props;
    for(int i = 0; i < n; i++){
        props.clear();
        line = lines[i];
        if (line[1] != '/'){
            //request the tag
            spcpos = line.find(' ');
            if(spcpos == -1) spcpos = line.find('>');
            if (tag != "") tag += '.';
            tag += line.substr(1,spcpos - 1);
            for(int j = spcpos; j < line.length() - 1; j++){
                if (line[j] == '"' && isValue) {
                    props[key] = value;
                    key = value = "";
                    isValue = false;
                }
                else if(isValue){
                    value += line[j];
                }
                else if(line[j] != ' ' && line[j] != '='&& line[j] != '"' && !isValue){
                    key += line[j];
                }
                else if(line[j] == '"' && !isValue) isValue = true;
            }
            structure[tag] = props;
        }else {
            int i = tag.length() - 1;
            int dotpos = tag.find('.');
            if(dotpos != -1){
                tag = tag.substr(0,dotpos);
            }
            else{
                tag.clear();
            }
        }
    }
    string querie;
    for(int i = 0; i < q; i++){
        querie = queries[i];
        int pos = querie.find('~');
        string tagq = querie.substr(0,pos);
        string propq = querie.substr(pos+1);
        try
        {
            map<string,string> props = structure.find(tagq)->second;
            string value = props.find(propq)->second;
            cout << value << endl;
        }
        catch(const std::exception& e)
        {
            cout << "Not Found!" << endl;
        }
        
    }
    return 0;
}
