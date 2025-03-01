//using function swapping;
#include<stdio.h>
void swapping(int *ptr1,int *ptr2)
{
    int temp;
    temp=*ptr1;
    *ptr1=*ptr2;
    *ptr2=temp;

}

int main()
{
    int num1=45,num2=54;
    printf("The numbers are: num1=%d, num2=%d\n",num1,num2);
    swapping(&num1,&num2);

    printf("After swapping : num1=%d, num2=%d\n",num1,num2);

    getch();
}
