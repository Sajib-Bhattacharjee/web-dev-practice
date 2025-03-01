#include<stdio.h>
int main()
{
    int row,col;
    int a[4][5];
    printf("Row and column: Hidden ");
    for(row=0; row<4; row++)
    {
        for(col=0; col<5; col++)
        {
            printf("\n a[%d][%d]=  ",row,col);
            scanf("%d  ",&a[row][col]);

        }

    }
    for(row=0; row<4; row++)
    {
        for(col=0; col<5; col++)
        {
            printf("%d  ",a[row][col]);
        }
        printf("\n\a") ;
    }

     getch();
}
