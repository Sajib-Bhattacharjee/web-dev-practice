#include<iostream>
#include<conio.h>
using namespace std;
int addition(int a,int b);
int main()
{
    int num1,num2;


    cout<<"Enter two integer number : ";
    cin>> num1>>num2;

    int result= addition(num1,num2);

    cout<<"The sum is: "<< result <<endl;

    getch();
}

int addition(int a,int b)
{
    int sum= a+b ;

  return sum;
}
