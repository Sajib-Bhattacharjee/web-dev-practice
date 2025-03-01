#include<stdio.h>
int main()
{
    int row,col,numberofrow,numberofcol,i;
    int A[33][44],B[33][44],C[33][44];
    printf("How many rows and cols:  ");
    scanf("%d %d",&numberofrow,&numberofcol);
    printf("Enter the element of  A matrix: ");
    for(row=0; row<numberofrow; row++)
    {
        for(col=0; col<numberofcol; col++)
        {
            printf("\nA[%d][%d]=  ",row,col);
            scanf("%d  ",&A[row][col]);
        }
        printf("\n");
    }
    printf("A=  ");
    for(row=0; row<numberofrow; row++)
    {
        printf("\t");
        for(col=0; col<numberofcol; col++)
        {
            printf("%d  ",A[row][col]);
        }
        printf("\n");
    }
    printf("\nEnter the element of B matrix :  ");
    printf("How many rows and cols:  ");
    scanf("%d %d",&numberofrow,&numberofcol);
    for(row=0; row<numberofrow; row++)
    {
        for(col=0; col<numberofcol; col++)
        {
               printf("B [%d][%d] =   ",row,col);
        scanf("%d ", &B[row][col]);
        }
        printf("\n");

    }
    printf("B=   ");

    for(row=0; row<numberofrow; row++)
    {
           printf("\t");
        for(col=0; col<numberofcol; col++)
        {
            printf("%d ", B[row][col]);
        }

        printf("\n");
    }

    for(row=0; row<numberofrow; row++)
    {
        printf("\t");
    for(col=0; col<numberofcol; col++)
    {
      C[row][col]= A[row][col] + B[row][col];
    }
    printf("\n");
    }
        printf("A+B=   ");
        for(row=0; row<numberofrow; row++)
        {
            for(col=0; col<numberofcol; col++)
            {
                printf("%d ",C[row][col]);
            }
            printf("\n");
        printf("\t");
        }

    getch();
}

