/*Now I am going to do a program that will be shown( 1 to n )sum of odd/even number,,,
So, Contine.....*/


#include<stdio.h>
int main()
{
    int  num,i , sum=0;
    printf("enter the last digit of a function:  ");
    scanf("%d",&num);
    for(i=1;i<=num;i=i+2) // (odd)
       // for(i=2;i<=num; i=i+2) (even)
    {
       printf("%d\n",i);
       sum=sum+i;
    }
    printf("Sum of odd/even: %d",sum);
    getch();
}
