#include <iostream>
using namespace std;

int main(){
    float distance, fuel, result;

    cin >> distance >> fuel;
    result = distance / fuel;

    cout.setf(ios_base::fixed);
    cout.precision(3);
    cout << result << " km/l";
}