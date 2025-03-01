#include<stdio.h>
int main()
{
    int a[ ]= {12, 33, 45, 67, 76, 78, 1, 2, 23};
    int value,pos=-1,i;
    printf("Enter  the value you want to search: ");
    scanf("%d",&value);
    for(i=0; i<9; i++)
    {
        if(value==a[i])
        {
            pos=i+1;
            break;
        }

    }
    if(pos==-1)
        printf("The data not found\n\a");
    else
        printf("the value is found at %d position ",pos);
    getch();

}
