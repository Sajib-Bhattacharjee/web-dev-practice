#include<stdio.h>
int main()
{
    while(1)
    {
        char str[1000];
        printf("Enter a string: ");
        gets(str);
        char ch;
        int i,vowel,consonant,digit,word,other ;
        i=vowel=consonant=digit=word=other=0;

        while((ch=str[i])!='\0')
        {
            if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'||
                    ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'   )
                vowel++;
            else if(ch>='a' && ch<='z' || ch>='A' && ch<='Z')
                consonant++;
            else if(ch==' ')
                word++;
            else if(ch>='48' || ch<='57')  //(ch>='0' || ch<='9')
                digit++;
            else
                other++;
            i++;
        }
        word++;
        printf("The number of vowel: %d\n",vowel);
        printf("The number of consonant: %d\n",consonant );
        printf("The number of word: %d\n",word);
        printf("The number of digit: %d\n",digit);
        printf("Other is: %d\n",other);
        getch();

    }

}
