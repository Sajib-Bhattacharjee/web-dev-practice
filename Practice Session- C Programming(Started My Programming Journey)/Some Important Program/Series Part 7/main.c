/*what can i do now ???
the program will show that the square of  multiple 1 to n integer number...
So,,, Let us Start.....*/
#include<stdio.h>
int main()
{
    int i,n,result=1;
    printf("Enter the last integer number: ");
    scanf("%d",&n);

    for(i=1; i<=n; i++)
    {
        result = result * i*i;
    }
    printf("The result is: %d",result);
    getch();

}
