#include<stdio.h>
int main()
{
    int num[222];
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
printf("The maximum is : %d\n",max);
printf("The minimum is : %d\n",min);
getch();


}
