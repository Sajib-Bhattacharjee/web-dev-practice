
//This pattern creat ten tropic,,,,That will be known..

#include<stdio.h>
int main()
{
    int n,col,row;
    printf("Enter a integer: ");
    scanf("%d",&n);
    for(row=n; row>=1;row--)
    {
        for(col=1; col<=row; col++)
        {
            printf("%c ",row+64);
        }
        printf("\n");
    }
    getch();
}
