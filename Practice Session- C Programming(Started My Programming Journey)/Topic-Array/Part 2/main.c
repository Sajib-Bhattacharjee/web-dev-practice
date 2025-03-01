#include<stdio.h>
int main()
{
    int A[3][4], B[3][4], row,col;
    printf("\nEnter element of A matrix.");
    for(row=0; row<3; row++)
    {
        for(col=0; col<4; col++)
        {
            printf("\nA[%d][%d] =  ",row,col);
            scanf("%d  ",&A[row][col]);
        }
        printf("\n");
    }
    printf("A=  ");
     for(row=0; row<3; row++)
     {
         printf("\t");
         for(col=0; col<4; col++)
            {
             printf("%d ",A[row][col]);
         }
         printf("\n");
     }

       printf("\n\nEnter element of B matrix.");
    for(row=0; row<3; row++)
    {
        for(col=0; col<4; col++)
        {
            printf("\nB[%d][%d] =  ",row,col);
            scanf("%d  ",&B[row][col]);
        }
        printf("\n");
    }
    printf("B=  ");
     for(row=0; row<3; row++)
     {
         printf("\t");
         for(col=0; col<4; col++)
            {
             printf("%d ",B[row][col]);
         }
         printf("\n");
     }
}
