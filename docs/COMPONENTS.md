# Component Library Documentation

## Overview

beRichHub uses a comprehensive component library built on top of shadcn/ui components, which are based on Radix UI primitives. This document provides detailed information about each component, its props, usage, and customization options.

## Component Categories

### 1. Form Components

#### Button (`components/ui/button.tsx`)

```typescript
interface ButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

// Usage
<Button variant="default" size="lg">Click me</Button>
<Button variant="outline" size="sm">Outline</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```

#### Input (`components/ui/input.tsx`)

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder?: string
  disabled?: boolean
}

// Usage
<Input type="email" placeholder="Enter your email" />
<Input type="password" placeholder="Password" disabled />
```

#### Textarea (`components/ui/textarea.tsx`)

```typescript
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  rows?: number;
}

// Usage
<Textarea placeholder="Enter your message" rows={4} />;
```

#### Label (`components/ui/label.tsx`)

```typescript
// Usage
<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />
```

#### Form (`components/ui/form.tsx`)

Used with React Hook Form for form validation and management.

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```

### 2. Data Display Components

#### Card (`components/ui/card.tsx`)

```typescript
// Usage
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Badge (`components/ui/badge.tsx`)

```typescript
interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

// Usage
<Badge variant="default">New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

#### Avatar (`components/ui/avatar.tsx`)

```typescript
// Usage
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

#### Separator (`components/ui/separator.tsx`)

```typescript
interface SeparatorProps {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

// Usage
<Separator orientation="horizontal" />
<Separator orientation="vertical" />
```

### 3. Navigation Components

#### NavigationMenu (`components/ui/navigation-menu.tsx`)

```typescript
// Usage
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/page1">Page 1</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

#### Breadcrumb (`components/ui/breadcrumb.tsx`)

```typescript
// Usage
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

#### Pagination (`components/ui/pagination.tsx`)

```typescript
// Usage
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### 4. Overlay Components

#### Dialog (`components/ui/dialog.tsx`)

```typescript
// Usage
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description goes here.</DialogDescription>
    </DialogHeader>
    <div>Dialog content</div>
    <DialogFooter>
      <Button type="submit">Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

#### Sheet (`components/ui/sheet.tsx`)

```typescript
// Usage
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Sheet description goes here.</SheetDescription>
    </SheetHeader>
    <div>Sheet content</div>
  </SheetContent>
</Sheet>
```

#### Drawer (`components/ui/drawer.tsx`)

Mobile-optimized drawer component using Vaul.

```typescript
// Usage
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </DrawerHeader>
    <div>Drawer content</div>
    <DrawerFooter>
      <Button>Action</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

#### Popover (`components/ui/popover.tsx`)

```typescript
// Usage
<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content goes here.</p>
  </PopoverContent>
</Popover>
```

#### Tooltip (`components/ui/tooltip.tsx`)

```typescript
// Usage
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### 5. Feedback Components

#### Alert (`components/ui/alert.tsx`)

```typescript
interface AlertProps {
  variant?: "default" | "destructive"
}

// Usage
<Alert>
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

#### Progress (`components/ui/progress.tsx`)

```typescript
interface ProgressProps {
  value?: number
  max?: number
}

// Usage
<Progress value={33} />
<Progress value={66} max={100} />
```

#### Skeleton (`components/ui/skeleton.tsx`)

```typescript
// Usage
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
```

### 6. Layout Components

#### Tabs (`components/ui/tabs.tsx`)

```typescript
// Usage
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Make changes to your account here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password here.</p>
  </TabsContent>
</Tabs>
```

#### Accordion (`components/ui/accordion.tsx`)

```typescript
// Usage
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Collapsible (`components/ui/collapsible.tsx`)

```typescript
// Usage
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">
      <ChevronDown className="h-4 w-4" />
      <span>Can I use this in my project?</span>
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects.
  </CollapsibleContent>
</Collapsible>
```

#### Sidebar (`components/ui/sidebar.tsx`)

Complex layout component for application sidebars.

```typescript
// Usage
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <h2>Navigation</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Home className="h-4 w-4" />
            <span>Home</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <SidebarFooter>
      <p>Footer content</p>
    </SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <main>Main content</main>
  </SidebarInset>
</SidebarProvider>
```

### 7. Input Components

#### Select (`components/ui/select.tsx`)

```typescript
// Usage
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>
```

#### Checkbox (`components/ui/checkbox.tsx`)

```typescript
// Usage
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

#### RadioGroup (`components/ui/radio-group.tsx`)

```typescript
// Usage
<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>
```

#### Switch (`components/ui/switch.tsx`)

```typescript
// Usage
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

#### Slider (`components/ui/slider.tsx`)

```typescript
// Usage
<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
```

### 8. Custom Application Components

#### ProfileCard (`components/profile/profile-card.tsx`)

User profile display and editing component.

```typescript
interface ProfileCardProps {
  user: {
    id: string;
    given_name: string;
    family_name: string;
    email: string;
    picture: string;
    roles: string;
  };
  isOwnProfile?: boolean;
}

// Usage
<ProfileCard user={userData} isOwnProfile={true} />;
```

#### BlogForm (`components/profile/BlogForm.tsx`)

Blog post creation form.

```typescript
// Usage
<BlogForm />
```

#### BlogList (`components/profile/BlogList.tsx`)

List of blog posts with management options.

```typescript
interface BlogListProps {
  userId?: string;
  isOwnProfile?: boolean;
}

// Usage
<BlogList userId="user123" isOwnProfile={false} />;
```

#### UserSearch (`components/search/user-search.tsx`)

User search and discovery component.

```typescript
// Usage
<UserSearch />
```

#### ChatInterface (`components/chat-llm/chat-interface.tsx`)

AI chat interface component.

```typescript
interface ChatInterfaceProps {
  messages: Message[];
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  disabled?: boolean;
}

// Usage
<ChatInterface
  messages={messages}
  input={input}
  handleInputChange={handleInputChange}
  handleSubmit={handleSubmit}
  isLoading={isLoading}
/>;
```

## Styling and Customization

### CSS Variables

The component library uses CSS variables for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

### Dark Mode

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other dark mode variables */
}
```

### Component Variants

Components use `class-variance-authority` for variant management:

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

This component library provides a comprehensive set of accessible, customizable, and well-designed components for building modern web applications.
