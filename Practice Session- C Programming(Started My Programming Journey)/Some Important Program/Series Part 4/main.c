/*Now I am coding the program that will be show
1^2+2^2+3^2+.......+ n^2;
so,the program will show that the Square of sum in n digit;
So,Let us start....*/
#include<stdio.h>
int main()
{
    int num , i , sum=0;
    printf("Enter the last digit of a function:  ");
    scanf("%d",&num);
    for(i=i; i<=num; i++)
    {
        sum= sum+ i*i ;
    }
    printf("The sum is: %d",sum);
    getch();
}
