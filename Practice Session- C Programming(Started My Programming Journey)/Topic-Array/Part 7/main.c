#include<stdio.h>
int main()
{
    int A[4][5],B[4][5],row,col;
    printf("\n Enter the Element of A matrix:  ");

    for(row=0; row<4; row++)
    {
        for(col=0; col<5; col++){
                printf("\nA[%d][%d]=   ", row,col);
            scanf("%d  ",&A[row][col]);
        }
        printf("\n");
    }

    printf("A= ");

    for(row=0; row<4; row++)
    {
        printf("\t");
        for(col=0; col<5; col++)
        {
            printf("%d  ",A[row][col]);
        }
        printf("\n");
    }
      printf("\n\n\nEnter the Element of B matrix:  ");

    for(row=0; row<4; row++)
    {
        for(col=0; col<5; col++){
                printf("\nA[%d][%d]=   ", row,col);
            scanf("%d  ",&B[row][col]);
        }
        printf("\n");
    }

    printf("B= ");

    for(row=0; row<4; row++)
    {
        printf("\t");
        for(col=0; col<5; col++)
        {
            printf("%d  ",B[row][col]);
        }
        printf("\n");
    }
}
