//Swaping using pointer;

#include<stdio.h>
int main()
{
    int num1,num2;
    printf("Enter the first number: ");
    scanf("%d",&num1);
    printf("Enter the second number: ");
    scanf("%d",&num2);



   int *ptr1;
   int *ptr2;
   ptr1=&num1;
   ptr2=&num2;

      int temp;

       temp=*ptr1;
     *ptr1=*ptr2;
   *ptr2=temp;


   printf("After swapping first number: %d\n",num1);
   printf("After swapping second number : %d\n",num2);
   getch();
printf("The programmer is sajib kumar");

}
