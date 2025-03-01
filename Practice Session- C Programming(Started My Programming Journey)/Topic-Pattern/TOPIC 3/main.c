//This type also has Ten pattern...
#include<stdio.h>
int main()
{
    int n,col,row;
    printf("Enter the n: ");
    scanf("%d",&n);
    for(row=1; row<=n; row++)
    {
        for(col=1 ; col<=row; col++)
        {
            printf("%d",row%2);
        }
        printf("\n");
    }
     for(row=n-1; row>=1; row--)//Look and mind this Mr,,,SBC,,
    {
        for(col=1 ; col<=row; col++)
        {
            printf("%d",row%2);
        }
        printf("\n");
    }
    getch();
}
