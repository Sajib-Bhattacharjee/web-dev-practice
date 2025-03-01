#include<stdio.h>
int main()
{
    int numberofrow,numberofcol,A[33][44],B[44][55],C[44][55];
    int row,col;
     printf("How many rows and cols:  ");
     scanf("%d %d",&numberofrow,&numberofcol);

    printf("Enter  The element of A matrix.\n");

     for(row=0; row<numberofrow; row++)
     {
         for(col=0; col<numberofcol; col++)
         {
            printf("A[%d][%d]=  ",row,col);
             scanf("%d  ",&A[row][col]);
         }
         printf("\n");
     }
     //printting  A matrix.....
     for(row=0; row<numberofrow; row++)
     {
         printf("\t");
         for(col=0; col<numberofcol; col++)
         {
             printf("%d  ",A[row][col]);
         }
         printf("\n");
     }

 printf("Enter  The element of  B matrix.\n");

     for(row=0; row<numberofrow; row++)
     {
         for(col=0; col<numberofcol; col++)
         {
            printf("B[%d][%d]=  ",row,col);
             scanf("%d  ",&B[row][col]);
         }
         printf("\n");
     }
     //printting  A matrix.....
     for(row=0; row<numberofrow; row++)
     {
         printf("\t");
         for(col=0; col<numberofcol; col++)
         {
             printf("%d  ",B[row][col]);
         }
         printf("\n");
     }
        printf("\n\nA + B=  ");
        for(row=0; row<numberofrow; row++)
        {

            for(col=0; col<numberofcol; col++)
            {
                C[row][col]= A[row][col] + B[row][col];
                printf("%d  ",C[row][col]);
            }
            printf("\n");
             printf("\t");
        }
     printf("\n\n\nThe program is created by...");
     printf("\n-Sajib kumar Bhattacharjee");



     getch();
}
