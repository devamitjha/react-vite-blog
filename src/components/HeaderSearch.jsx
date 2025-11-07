import {
  SearchIcon,
} from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"


const HeaderSearch = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
        </InputGroup>
    </div>
  )
}

export default HeaderSearch