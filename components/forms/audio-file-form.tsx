'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const audioFileSchema = z.object({
  audioFile: z
    .instanceof(File)
    .refine((file) => file.type.startsWith('audio/'), {
      message: 'Please upload a valid audio file.',
    }),
});
export const AudioFileForm = () => {
  const form = useForm<z.infer<typeof audioFileSchema>>({
    resolver: zodResolver(audioFileSchema),
    defaultValues: {
      audioFile: null as unknown as File,
    },
  });

  function onSubmit(data: z.infer<typeof audioFileSchema>) {
    console.log('Form submitted with data:', data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-xs mx-auto"
      >
        <FormField
          name="audioFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium mb-1">Audio File</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="audio/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files && e.target.files[0]) {
                      field.onChange(e.target.files[0]);
                    }
                  }}
                  className="p-2 border border-gray-300 rounded"
                />
              </FormControl>
              <FormDescription className="text-xs mt-1">
                Upload an audio file.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="p-2 rounded border border-gray-300 font-medium cursor-pointer"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
