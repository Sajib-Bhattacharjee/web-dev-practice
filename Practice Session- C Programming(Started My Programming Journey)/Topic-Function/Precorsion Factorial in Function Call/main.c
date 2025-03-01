#include<stdio.h>
int main()
{
    int n;
    printf("Enter the Factorial value: ");
    scanf("%d",&n);
    int factvalue=fact(n);
    printf("The factorial is:%d\n",factvalue);
}
int fact(int n1)
{
    if(n1==1)
    return 1;
    else
    return  n1*fact(n1-1);
}
