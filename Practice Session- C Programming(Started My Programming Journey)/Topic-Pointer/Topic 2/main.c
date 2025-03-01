//The simple programmer .....Using pointer sum calculation.,,

#include<stdio.h>
int main()
{
    int num1,num2;
    int sum;
    printf("Enter two numbers: ");
    scanf("%d %d",&num1,&num2);

    int *ptr1,*ptr2;
    ptr1=&num1;
    ptr2=&num2;

    sum=*ptr1+*ptr2;
    printf("The sum is: %d\n",sum);
    getch();


}
