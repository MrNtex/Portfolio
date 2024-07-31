import { Button } from "./ui/Button"
import { useToast } from "./ui/use-toast"

export const CopyEmail = () => {
    const { toast } = useToast()
  
    return (
      <Button
        onClick={() => {
          toast({
            title: "Copied to clipboard",
            description: "rtrniemiec@proton.me",
          })
          navigator.clipboard.writeText('rtrniemiec@proton.me')
        }}
      >
        Contact me!
      </Button>
    )
  }
  