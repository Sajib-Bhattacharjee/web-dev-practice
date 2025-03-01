//Using Strcmp a function equal or not equal...
#include<stdio.h>
int main()
{
    char str1[ ]="Anisul Islam";
    char str2[ ]="Anisul ";
    int n=strcmp(str1,str2);
    if(n==0)
        printf("The string is equal");
        else
        printf("The string is not equal");
    getch();
}
