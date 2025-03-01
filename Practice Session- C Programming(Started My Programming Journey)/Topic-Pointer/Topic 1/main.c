/*First program of pointer .....This program is very important for a programmer...
So,Let us start....*/

#include<stdio.h>
int main()
{
    int n;
    printf("Enter the value of n: ");
    scanf("%d",&n);
        int *ptr;
        ptr=&n;
        printf("The value of n: %d\n",n);
        printf("The memory address of n: %u\n",&n);
        printf("The pointer value: %d\n",ptr);
        printf("The value of n: %d\n",*ptr);//the most important line....

}
