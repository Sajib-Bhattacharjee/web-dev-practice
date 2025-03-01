//How to do a program square....
//So.Let us start.....

#include<stdio.h>

    int square(int a)
{
    return a*a;
}
int main()

{
    while(1)
    {
    int num;
    printf("Enter a value: ");
    scanf("%d",&num);
    int result=square(num);
    printf("The square is: %d\n",result);
    getch();
}
}



