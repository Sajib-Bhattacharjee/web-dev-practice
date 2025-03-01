/*What am i going to do?
now i am going to write a program what will be show "gunnotor dhara"....
Such as" 1*2 + 2*3 + 3*4  + ........... + a*b;
So,Now.....Starting.....*/

#include<stdio.h>

int main()
{
    int num1,num2, a=1,b=2,sum=0;
    printf("Enter the last two digit of a function:   ");
    scanf("%d %d",&num1,&num2);

    while(a<=num1 && b<=num2 )

    {

        sum=sum+a*b;
        a=a+1;
        b=b+1;
    }
    printf(" The sum is: %d",sum);
    getch();

}
