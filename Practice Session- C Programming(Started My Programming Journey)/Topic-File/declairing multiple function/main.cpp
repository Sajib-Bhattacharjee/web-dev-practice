#include<iostream>
#include<conio.h>
using namespace std;
void addition(int,int);
 void subtraction (int num1,int num2);
 void multiple(int a,int b);
 void division*(int a , int b);

int main()
{
    int num1,num2;
    cout<< "Enter two integer numbers: ";
    cin>> num1>> num2;
    addition(num1,num2);
    subtraction(num1,num2);
    multiple(num1,num2);
    division(num1,num2);


    getch();

}
    void addition(int num1,int  num2)
    {
         int   sum=num1+num2;
        cout<<"The sum is: "<< sum<<endl;
    }

    void subtraction (int num1,int num2)
{
        int     sub=num1-num2;
    cout<< "The subtraction is : "<<sub<<endl;
}

void multiple(int a,int b)
{
  int   mul=a*b;
    cout<< "The multiple is: "<< mul<<endl;
}
void division(int a,int b)
{
   double div=(double)a/b;
    cout<< "The division is : "<< div<< endl;
}

