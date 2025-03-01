#include<stdio.h>

int css(int num[222]);
int csc(int num[222]);
{

       int i,n;
    printf("How many numbers: ");
    scanf("%d",&n);
    for(i=0; i<n; i++)
    {
        scanf("%d",&num[i]);

    }

    int max=num[0];
        int min=num[0];
for(i=1; i<n; i++)
{
    if(max<num[i])
        max=num[i];

        else if(min>num[i])
            min=num[i];

}
    return max;
    return min;
}



int main()
{
    int num[222];
int     maximum=css(num);
  int  minimum=csc(num);

printf("The maximum is : %d\n",maximum);
printf("The minimum is : %d\n",minimum);



}
