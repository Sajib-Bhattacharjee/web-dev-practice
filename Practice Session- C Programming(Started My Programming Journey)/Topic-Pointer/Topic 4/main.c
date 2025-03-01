//Access array element using Pointer,.....accumulate

#include<stdio.h>
int main()
{
    int a[1000];
    int n,i;
    printf("How many numbers: ");
    scanf("%d",&n);

    for(i=0; i<n; i++)
    {
        scanf("%d",&a[i]);

    }

    int *ptr;
    ptr=&a[0];
    for(i=0; i<n; i++)
    {
        printf("the numbers are: %d\n",*ptr);
        ptr++;
    }


    getch();
}
