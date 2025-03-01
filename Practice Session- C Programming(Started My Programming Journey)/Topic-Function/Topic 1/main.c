/*This is a very simple program ....You can do it at once but the matter is that
try another way new thing......*/
#include<stdio.h>{
    void sum(int a,int b,int c)
    {
        printf("The sum is: %d\n",a+b+c);

    }
    void sub (int a,int b,int c)
    {
        printf("The subtraction is: %d\n",a-b-c);
    }



int main()
{
    int num1,num2,num3;
    printf("Enter three integer number: ");
    scanf("%d %d %d",&num1,&num2,&num3);
    sum(num1,num2,num3);
    sub(num1,num2,num3);
    getch();
}
