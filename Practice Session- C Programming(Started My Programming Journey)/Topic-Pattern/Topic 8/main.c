//the pattern will show that the triangle shape.....
#include<stdio.h>
int main()
{
    int n,row,col;
    printf("Enter the value of N: ");
    scanf("%d",&n);
    for(row=1; row<=n; row++)
    {
        for(col=1; col<=n; col++)
        {
            if( col==1 || row==n || row==col)
                printf("*");
            else
             printf(" ");

        }
        printf("\n\a");
    }
    getch();
}
