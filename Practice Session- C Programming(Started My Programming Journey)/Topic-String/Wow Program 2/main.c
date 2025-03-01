#include<stdio.h>
int main()
{
    printf("\nBefore swapping the value inputting ");
    char str1[ 1000];
    printf("\n\nEnter the value for first string : ");
    gets(str1);
    printf("\nBefore swapping input For first string: %s\n",str1);
    char str2[1000 ];
    printf("\n\n\nEnter the value for second string : ");
    gets(str2);
    printf("\nBefore swapping input For second string : %s\n",str2);

    char temp[1000 ];
    strcpy(temp,str1);
    strcpy(str1,str2);
    strcpy(str2,temp);
    printf("Now the string is shown as the type ..");
    printf("\n\nAfter swapping the value of first string is: %s\n",str1);
    printf("\nAfter swapping the value of second  string is: %s\n",str2);

    getch();

}
