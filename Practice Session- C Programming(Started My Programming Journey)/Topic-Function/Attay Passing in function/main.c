#include<stdio.h>
void display(int x[100])
{  int i,n;
     printf("How many  numbers: ");
   scanf("%d",&n);
   for(i=0; i<n; i++)
   {
       scanf("%d ",&x[i]);
       printf("The input is: %d\n", x[i]);
   }
    }
int main()


{    int num[100];
    display(num);

       getch();
}
