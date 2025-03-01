#include<iostream>
#include<conio.h>
using namespace std;
void addition(int a ,int b)
{
    int sum=a+b;
    cout<<"The sum is: "<<sum<<endl;

}

int main()
{
    while(1)
    {
          int num1,num2;
    cout<< "Enter two integer numbers: ";
    cin>> num1>>num2;
    addition(num1,num2);

    }



    getch();
}
