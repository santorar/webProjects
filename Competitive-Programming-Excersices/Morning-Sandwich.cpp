#include <iostream>

using namespace std;
int main(){
    int test = 0;
    cin >> test;
    int b, c, j;
    for (int i = 0; i < test; i++)
    {
        cin >> b;
        cin >> c;
        cin >> j;
        if(b <= c + j){
            cout << b*2 -1 << endl;
        }else{
            cout << (c + j) * 2 + 1 << endl ;
        }
    }
    return 0;
}
