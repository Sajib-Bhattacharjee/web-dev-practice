/*String copppy with a library function,,,
So,,,Let us start the program....*/
#include<stdio.h>
int main()
{
    char source[ ]="Palobi Bhattacahrjee";
    char target[35];
    strcpy(target , source);
    printf("The source is : %s\n",source);
    printf("The target is: %s\n",target);
    getch();
}
